import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTabsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tabs-fill_svg__a)"><path fill="#000" d="M16 10.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.477-.65l1.391-4.637A.99.99 0 0 1 2.374 5h5.257a.99.99 0 0 1 .958.713L9.875 10h.956L9.424 5.322A.25.25 0 0 1 9.664 5h.964a1 1 0 0 1 .957.713L12.875 10h.956l-1.407-4.678a.25.25 0 0 1 .24-.322h.964a1 1 0 0 1 .957.713l1.392 4.636q.023.074.023.151" /></g><defs><clipPath id="tabs-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTabsFill);
const Memo = memo(ForwardRef);
export default Memo;