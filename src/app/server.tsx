import { headers } from 'next/headers';

export default function Server({ children }: { children: (nonce: string | undefined) => React.ReactNode }) {
  const nonce = headers().get('x-nonce') || undefined;

  return (
    <>
      {children(nonce)}
    </>
  );
}
