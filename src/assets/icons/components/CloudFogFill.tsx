import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudFogFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-fog-fill_svg__a)"><path fill="#000" d="M10.5 14.5a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1 0-1H10a.5.5 0 0 1 .5.5m-2.5-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m3.5-.5H10a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1m2.992-6.028a4.75 4.75 0 0 0-9.486.045.51.51 0 0 1-.506.483h-.037A.51.51 0 0 1 4 5.962a6 6 0 0 1 .146-1.032.25.25 0 0 0-.313-.299A3.256 3.256 0 0 0 1.5 7.772C1.513 9.567 3.008 11 4.803 11H9.75a4.756 4.756 0 0 0 4.742-5.028" /></g><defs><clipPath id="cloud-fog-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudFogFill);
const Memo = memo(ForwardRef);
export default Memo;