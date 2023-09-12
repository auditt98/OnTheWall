import { useRef } from 'react';
import { IAlbum } from '../types/album';
import { useSprings, animated } from '@react-spring/web';

export default function Album({ album }: { album: IAlbum }) {
  const { photos } = album;
  const order = useRef(photos.map((_, i) => i));
  const [springs, api] = useSprings(photos.length, () => ({
    from: { rotate: '0deg' },
    to: { rotate: '10deg' },
  }));

  return (
    <div>
      {springs.map((props, i) => (
        <animated.div
          key={i}
          className="absolute col-span-1 text-white h-[300px] w-full max-w-[300px] rounded-lg bg-cover bg-center"
          style={{
            ...props,
            backgroundImage: `url(${
              photos?.[i].presigned_url ||
              'https://images.unsplash.com/photo-1694112525942-9d90307d5bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80'
            })`,
          }}
        ></animated.div>
      ))}
      {/* <div
        className="bg-blue-400 absolute col-span-1 text-white h-[300px] w-full max-w-[300px] rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${photos?.[0].presigned_url})`,
          transform: 'rotate(0deg)',
        }}
      ></div>
      <div
        className="bg-blue-400 absolute col-span-1 text-white h-[300px] w-full max-w-[300px] rounded-lg bg-cover bg-center"
        style={{
          transform: 'rotate(3deg)',
          backgroundImage: `url("https://images.unsplash.com/photo-1694112525942-9d90307d5bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80")`,
        }}
      ></div>
      <div
        className="bg-blue-400 absolute col-span-1 text-white h-[300px] w-full max-w-[300px] rounded-lg bg-cover bg-center"
        style={{
          transform: 'rotate(-5deg)',
          backgroundImage: `url("https://images.unsplash.com/photo-1690704272983-4c240ff7a7a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80")`,
        }}
      ></div> */}
    </div>
  );
}
