import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserCircleCheckFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-circle-check-fill_svg__a)"><path fill="#000" d="M14.41 6.918A6.496 6.496 0 1 1 9.083 1.59a.5.5 0 0 1-.165.986A5.504 5.504 0 0 0 2.5 8a5.48 5.48 0 0 0 1.39 3.65c.364-.527.825-.979 1.36-1.331a.25.25 0 0 1 .303.02 3.74 3.74 0 0 0 4.89 0 .25.25 0 0 1 .303-.02c.535.352.998.804 1.362 1.332a5.48 5.48 0 0 0 1.316-4.568.5.5 0 1 1 .986-.165M5.25 7.5a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0m9.604-5.354a.5.5 0 0 0-.708 0L12.5 3.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="user-circle-check-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserCircleCheckFill);
const Memo = memo(ForwardRef);
export default Memo;