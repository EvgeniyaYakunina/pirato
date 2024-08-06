import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGifFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gif-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M7 9a2 2 0 0 1-4 0V7a2 2 0 0 1 3.49-1.333.5.5 0 1 1-.744.666A1 1 0 0 0 4 7v2a1 1 0 0 0 2 0v-.5h-.5a.5.5 0 1 1 0-1h1A.5.5 0 0 1 7 8zm2 1.5a.5.5 0 0 1-1 0v-5a.5.5 0 1 1 1 0zM12.75 6H11v1.5h1.25a.5.5 0 0 1 0 1H11v2a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5h2.25a.5.5 0 0 1 0 1" /></g><defs><clipPath id="gif-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGifFill);
const Memo = memo(ForwardRef);
export default Memo;