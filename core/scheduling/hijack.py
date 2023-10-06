import torch


class TorchHijack:
    """This is here to replace torch.randn_like of k-diffusion.

    k-diffusion has random_sampler argument for most samplers, but not for all, so
    this is needed to properly replace every use of torch.randn_like.

    We need to replace to make images generated in batches to be same as images generated individually.
    """

    def __getattr__(self, item):
        if item == "randn_like":
            return self.randn_like

        if hasattr(torch, item):
            return getattr(torch, item)

        raise AttributeError(
            f"'{type(self).__name__}' object has no attribute '{item}'"
        )

    def randn_like(self, x):
        from core.inference.utilities import randn_like

        return randn_like(x, x.device, x.dtype)
