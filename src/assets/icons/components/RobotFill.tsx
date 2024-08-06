import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRobotFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#robot-fill_svg__a)"><path fill="#000" d="M12.5 3h-4V1a.5.5 0 0 0-1 0v2h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-1.75 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M6 11.5H5a1 1 0 0 1 0-2h1zm-.75-4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3.75 4H7v-2h2zm2 0h-1v-2h1a1 1 0 1 1 0 2" /></g><defs><clipPath id="robot-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRobotFill);
const Memo = memo(ForwardRef);
export default Memo;