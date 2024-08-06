import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHairDryerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hair-dryer-fill_svg__a)"><path fill="#000" d="m11.089 12.914 1.973-4.347A4 4 0 0 0 10.5 1.5a1 1 0 0 0-.082.007l-8.582 1.43A1 1 0 0 0 1 3.925v3.152a1 1 0 0 0 .836.987L8 9.09v3.41a1 1 0 0 0 1 1 2.5 2.5 0 0 0 2.5 2.5h1a.5.5 0 0 0 0-1h-1a1.5 1.5 0 0 1-1.5-1.5h.178a1 1 0 0 0 .91-.586M12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.582 3.993a1 1 0 0 0 .082.007c.377 0 .752-.054 1.114-.159L10.176 12.5H9V9.257z" /></g><defs><clipPath id="hair-dryer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHairDryerFill);
const Memo = memo(ForwardRef);
export default Memo;