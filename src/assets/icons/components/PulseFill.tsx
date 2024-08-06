import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPulseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pulse-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-.5 6h-1.21l-1.852 3.25a.5.5 0 0 1-.435.25h-.029a.5.5 0 0 1-.43-.303L6.437 5.62l-1.5 2.63a.5.5 0 0 1-.437.25H3a.5.5 0 1 1 0-1h1.21l1.856-3.25a.5.5 0 0 1 .893.051l2.604 6.079 1.5-2.628a.5.5 0 0 1 .434-.25h1.5a.5.5 0 1 1 0 1z" /></g><defs><clipPath id="pulse-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPulseFill);
const Memo = memo(ForwardRef);
export default Memo;