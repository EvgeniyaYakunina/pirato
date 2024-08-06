import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWebcamSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#webcam-slash-fill_svg__a)"><path fill="#000" d="M5.209 2.7a.25.25 0 0 1 .049-.376 5 5 0 0 1 6.642 7.3.25.25 0 0 1-.382.015l-1.027-1.13a.25.25 0 0 1-.019-.313 3 3 0 0 0-3.927-4.32.25.25 0 0 1-.31-.048zm2.724 1.8a2 2 0 0 0-.527.089.25.25 0 0 0-.109.41L9.43 7.346a.25.25 0 0 0 .416-.073c.102-.245.155-.507.154-.772a2.02 2.02 0 0 0-2.067-2m5.403 9.369a.5.5 0 0 1-.706-.034l-.306-.335H2a.5.5 0 0 1-.5-.533.51.51 0 0 1 .517-.467H7.5v-1.025A4.995 4.995 0 0 1 3.68 3.99L2.63 2.836a.5.5 0 1 1 .74-.672l10 11a.5.5 0 0 1-.034.706zM8 9.499q.316 0 .625-.065l-.862-.949A2 2 0 0 1 6 6.545l-.86-.948A3 3 0 0 0 8 9.5m3.415 3-1.326-1.458a5 5 0 0 1-1.589.434V12.5z" /></g><defs><clipPath id="webcam-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWebcamSlashFill);
const Memo = memo(ForwardRef);
export default Memo;