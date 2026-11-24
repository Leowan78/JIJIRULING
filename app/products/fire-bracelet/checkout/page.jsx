import CheckoutPreview from './preview';
export const metadata = { title: 'Checkout preview — JIJI RULING', robots: { index: false, follow: false } };
export default async function Page({ searchParams }) {
  const params = await searchParams;
  const size = ['15 cm', '16 cm', '17 cm', '18 cm'].includes(params.size) ? params.size : '16 cm';
  const style = ['Signature accents', 'Minimal beads'].includes(params.style) ? params.style : 'Signature accents';
  const count = Number(params.quantity);
  const quantity = Number.isInteger(count) && count >= 1 && count <= 5 ? count : 1;
  return <CheckoutPreview size={size} style={style} quantity={quantity} />;
}
