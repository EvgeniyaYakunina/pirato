import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudLightningFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-lightning-fill_svg__a)"><path fill="#000" d="M9.75 10.5H8.283l-.9 1.5H9a.5.5 0 0 1 .429.758l-1.5 2.5a.5.5 0 0 1-.858-.515L8.117 13H6.5a.5.5 0 0 1-.429-.758L7.117 10.5H4.804c-1.796 0-3.291-1.433-3.304-3.227A3.256 3.256 0 0 1 3.834 4.13a.25.25 0 0 1 .313.299A6 6 0 0 0 4 5.462.51.51 0 0 0 4.463 6h.038a.51.51 0 0 0 .505-.482A4.75 4.75 0 1 1 9.75 10.5" /></g><defs><clipPath id="cloud-lightning-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudLightningFill);
const Memo = memo(ForwardRef);
export default Memo;