import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCertificateFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#certificate-fill_svg__a)"><path fill="#000" d="M14.5 5.408V3.5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H10V14a.5.5 0 0 0 .75.438l1.5-.86 1.5.86A.5.5 0 0 0 14.5 14v-3.908a3.24 3.24 0 0 0 0-4.684M8 9H4.5a.5.5 0 1 1 0-1H8a.5.5 0 1 1 0 1m0-2H4.5a.5.5 0 1 1 0-1H8a.5.5 0 1 1 0 1m5.5 6.138-1-.572a.5.5 0 0 0-.496 0l-1 .572V10.75a3.24 3.24 0 0 0 2.5 0zM12.25 10a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" /></g><defs><clipPath id="certificate-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCertificateFill);
const Memo = memo(ForwardRef);
export default Memo;