import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCampfireFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#campfire-fill_svg__a)"><path fill="#000" d="M8.262 1.575a.5.5 0 0 0-.524 0A9.8 9.8 0 0 0 6.015 3C4.861 4.196 4.25 5.494 4.25 6.75a3.75 3.75 0 0 0 7.5 0c0-2.995-3.346-5.088-3.488-5.175M8 9.5A1.5 1.5 0 0 1 6.5 8C6.5 6.5 8 5.5 8 5.5s1.5 1 1.5 2.5A1.5 1.5 0 0 1 8 9.5m5.976 4.651a.5.5 0 0 1-.628.325L8 12.775l-5.348 1.701a.501.501 0 0 1-.303-.953l4-1.273-4-1.274a.5.5 0 1 1 .303-.952L8 11.725l5.348-1.701a.501.501 0 1 1 .303.952l-4 1.274 4 1.273a.5.5 0 0 1 .325.628" /></g><defs><clipPath id="campfire-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCampfireFill);
const Memo = memo(ForwardRef);
export default Memo;