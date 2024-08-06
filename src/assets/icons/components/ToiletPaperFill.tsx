import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgToiletPaperFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#toilet-paper-fill_svg__a)"><path fill="#000" d="M11.5 7.5a.5.5 0 0 1-.5.5h-1a.5.5 0 1 1 0-1h1a.5.5 0 0 1 .5.5m3.5 0V13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.353C5.46 12.523 4.761 13 4 13c-.867 0-1.654-.618-2.215-1.74C1.279 10.25 1 8.911 1 7.5s.279-2.747.785-3.76C2.346 2.619 3.133 2 4 2h8c.867 0 1.654.618 2.215 1.74.506 1.013.785 2.348.785 3.76m-10.25 0a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M14 8h-1a.5.5 0 0 1 0-1h.987C13.865 4.619 12.885 3 12 3H5.758a4.6 4.6 0 0 1 .457.74c.446.893.715 2.036.773 3.26H8a.5.5 0 1 1 0 1H7v5h7z" /></g><defs><clipPath id="toilet-paper-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgToiletPaperFill);
const Memo = memo(ForwardRef);
export default Memo;