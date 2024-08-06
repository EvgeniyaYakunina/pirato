import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBellSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bell-slash-fill_svg__a)"><path fill="#000" d="M13.865 12a.116.116 0 0 1-.187.018L5.204 2.699a.25.25 0 0 1 .05-.375 4.97 4.97 0 0 1 2.82-.824c2.739.041 4.914 2.319 4.926 5.058.009 2.18.52 3.846.864 4.437A.99.99 0 0 1 13.865 12m-.495 1.164a.5.5 0 0 1-.74.672L11.413 12.5h-.966a2.5 2.5 0 0 1-4.901 0H2.994A.986.986 0 0 1 2 11.505a1 1 0 0 1 .14-.522c.346-.608.856-2.29.856-4.483-.001-.882.233-1.748.678-2.51L2.625 2.837a.5.5 0 1 1 .74-.672zM9.412 12.5h-2.83a1.5 1.5 0 0 0 2.83 0" /></g><defs><clipPath id="bell-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBellSlashFill);
const Memo = memo(ForwardRef);
export default Memo;