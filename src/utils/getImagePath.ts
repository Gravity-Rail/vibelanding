export function getImagePath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prepend the repo name
  if (process.env.NODE_ENV === 'production') {
    return `/vibelanding/${cleanPath}`;
  }
  
  // In development, just use the path as is
  return `/${cleanPath}`;
} 