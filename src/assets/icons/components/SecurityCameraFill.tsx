import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSecurityCameraFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#security-camera-fill_svg__a)"><path fill="#000" d="M15.5 8.5a.5.5 0 0 0-.5.5v1h-2.793l-1.145-1.146 3.147-3.147a1 1 0 0 0 0-1.414l-2.355-2.356L10.707.793a1 1 0 0 0-1.415 0l-9.11 9.14A.625.625 0 0 0 .625 11h2.46l2.208 2.207a1 1 0 0 0 1.414 0l3.647-3.645 1.146 1.145a1 1 0 0 0 .707.293H15v1a.5.5 0 1 0 1 0V9a.5.5 0 0 0-.5-.5m-5.5-7 .793.793L3.085 10H1.53z" /></g><defs><clipPath id="security-camera-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSecurityCameraFill);
const Memo = memo(ForwardRef);
export default Memo;