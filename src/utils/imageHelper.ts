/**
 * Safe Image URL Resolver for Technovahubs
 * Ensures images resolve correctly on mobile, desktop, Cloud Run dev servers,
 * GitHub Pages, and production builds.
 */

export const getSafeImageUrl = (rawUrl?: string): string => {
  if (!rawUrl) return '';
  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
    return rawUrl;
  }
  // Strip any leading ./ or /src/assets/images/ or /images/
  const cleanName = rawUrl.split('/').pop() || '';
  if (!cleanName) return rawUrl;
  return `/images/${cleanName}`;
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  rawUrl?: string,
  onFinalFail?: () => void
) => {
  const target = e.currentTarget;
  const filename = (rawUrl || target.src || '').split('/').pop() || '';
  if (!filename) return;

  const currentAttempt = parseInt(target.dataset.failAttempt || '0', 10);
  target.dataset.failAttempt = (currentAttempt + 1).toString();

  if (currentAttempt === 0) {
    // Attempt 1: Root public images
    target.src = `/images/${filename}`;
  } else if (currentAttempt === 1) {
    // Attempt 2: Relative public images
    target.src = `./images/${filename}`;
  } else if (currentAttempt === 2) {
    // Attempt 3: Vite src asset path
    target.src = `/src/assets/images/${filename}`;
  } else {
    // Final fail
    if (onFinalFail) {
      onFinalFail();
    }
  }
};
