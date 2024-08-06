import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBrowsersFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#browsers-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-9a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-2 3v1h-9v-1zm2 5h-1v-5a1 1 0 0 0-1-1h-7v-1h9z" /></g><defs><clipPath id="browsers-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBrowsersFill);
const Memo = memo(ForwardRef);
export default Memo;