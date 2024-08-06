import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCastleTurretFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#castle-turret-fill_svg__a)"><path fill="#000" d="M13.5 13.5h-1V7.207l.707-.707a1 1 0 0 0 .293-.707V3a1 1 0 0 0-1-1h-1.25a.5.5 0 0 0-.5.5V4h-1.5V2.5a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5V4h-1.5V2.5a.5.5 0 0 0-.5-.5H3.5a1 1 0 0 0-1 1v2.793a1 1 0 0 0 .293.707l.707.707V13.5h-1a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m-6.5-3a1 1 0 0 1 2 0v3H7z" /></g><defs><clipPath id="castle-turret-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCastleTurretFill);
const Memo = memo(ForwardRef);
export default Memo;