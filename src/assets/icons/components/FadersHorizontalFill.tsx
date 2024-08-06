import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFadersHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#faders-horizontal-fill_svg__a)"><path fill="#000" d="M11.5 5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m-9 .5h6v1A.5.5 0 0 0 9 7h1a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 0 10 3H9a.5.5 0 0 0-.5.5v1h-6a.5.5 0 1 0 0 1m11 5H8a.5.5 0 0 0 0 1h5.5a.5.5 0 0 0 0-1M6 9H5a.5.5 0 0 0-.5.5v1h-2a.5.5 0 0 0 0 1h2v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 0 6 9" /></g><defs><clipPath id="faders-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFadersHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;