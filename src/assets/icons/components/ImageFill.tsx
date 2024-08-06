import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgImageFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#image-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-3.75 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m3.75 7h-11v-2.457l2.896-2.897a.5.5 0 0 1 .708 0l4.209 4.208a.5.5 0 0 0 .707-.708L9.916 9.543l.896-.897a.5.5 0 0 1 .707 0L13.5 10.63z" /></g><defs><clipPath id="image-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgImageFill);
const Memo = memo(ForwardRef);
export default Memo;