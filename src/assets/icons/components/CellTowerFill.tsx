import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCellTowerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cell-tower-fill_svg__a)"><path fill="#000" d="M8.447 5.276a.5.5 0 0 0-.895 0l-4.5 9a.5.5 0 1 0 .895.448L4.812 13h6.382l.861 1.724a.5.5 0 1 0 .892-.448zM8 6.618 9.69 10H6.31zm1.968-.76a2 2 0 1 0-3.938 0 .5.5 0 1 1-.983.179 3 3 0 1 1 5.904 0 .5.5 0 1 1-.983-.178M4.009 8.514a5 5 0 1 1 7.982 0 .5.5 0 0 1-.798-.603 4 4 0 1 0-6.386 0 .5.5 0 0 1-.798.603" /></g><defs><clipPath id="cell-tower-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCellTowerFill);
const Memo = memo(ForwardRef);
export default Memo;