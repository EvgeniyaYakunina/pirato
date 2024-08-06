import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShippingContainerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shipping-container-fill_svg__a)"><path fill="#000" d="M14.775 4.416 8.137 2.519a.5.5 0 0 0-.208-.014l-6.57.939a1.005 1.005 0 0 0-.859.99v7.132a1.005 1.005 0 0 0 .859.99l6.57.938a.492.492 0 0 0 .208-.013l6.638-1.897a1 1 0 0 0 .725-.959v-5.25a1.004 1.004 0 0 0-.725-.96M4 7.5H3a.5.5 0 1 0 0 1h1v3.424l-2.5-.358V4.434L4 4.076zm3.5 4.924L5 12.066V8.5h1a.5.5 0 1 0 0-1H5V3.934l2.5-.358z" /></g><defs><clipPath id="shipping-container-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShippingContainerFill);
const Memo = memo(ForwardRef);
export default Memo;