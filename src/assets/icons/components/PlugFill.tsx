import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlugFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#plug-fill_svg__a)"><path fill="#000" d="M14.854 4.854 12.707 7l1.647 1.646a.5.5 0 0 1-.708.708l-.396-.397-3.312 3.312a2.5 2.5 0 0 1-3.536 0l-.98-.983-3.068 3.068a.5.5 0 0 1-.708-.708l3.068-3.068-.981-.982a2.5 2.5 0 0 1 0-3.535l3.312-3.313-.397-.396a.5.5 0 1 1 .708-.708L9 3.294l2.146-2.148a.5.5 0 0 1 .708.708L9.707 4 12 6.293l2.146-2.147a.5.5 0 0 1 .708.708" /></g><defs><clipPath id="plug-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlugFill);
const Memo = memo(ForwardRef);
export default Memo;