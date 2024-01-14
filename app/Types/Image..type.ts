type LoadImageProps = {
  src: any;
  quality: any;
  width: any;
};

export const LoadImage = ({ src, width, quality }: Partial<LoadImageProps>) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
