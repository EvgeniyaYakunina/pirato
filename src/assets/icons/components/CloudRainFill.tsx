import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudRainFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-rain-fill_svg__a)"><path fill="#000" d="m9.916 12.277-2 3a.5.5 0 0 1-.832-.555l2-3a.5.5 0 0 1 .832.555m4.576-6.805a4.75 4.75 0 0 0-9.486.045A.51.51 0 0 1 4.5 6h-.037A.51.51 0 0 1 4 5.462a6 6 0 0 1 .146-1.032.25.25 0 0 0-.313-.299A3.256 3.256 0 0 0 1.5 7.272C1.513 9.067 3.008 10.5 4.803 10.5h2.263l-1.482 2.222a.5.5 0 1 0 .832.555L8.268 10.5H9.75a4.756 4.756 0 0 0 4.742-5.028" /></g><defs><clipPath id="cloud-rain-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudRainFill);
const Memo = memo(ForwardRef);
export default Memo;