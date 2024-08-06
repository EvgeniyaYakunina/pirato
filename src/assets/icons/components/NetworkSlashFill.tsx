import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNetworkSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#network-slash-fill_svg__a)"><path fill="#000" d="M6.13 3.713A.5.5 0 0 1 6 3.375V2.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7.976a.5.5 0 0 1-.37-.164zm-2.76-1.55a.5.5 0 1 0-.74.673L6.415 7H1.5a.5.5 0 1 0 0 1h2v2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.5V8h2.824l5.306 5.836a.502.502 0 0 0 .827-.12.5.5 0 0 0-.087-.552zM14.5 7h-4.25a.5.5 0 0 0 0 1h1.25v1.427a.5.5 0 0 0 1 0V8h2a.5.5 0 0 0 0-1" /></g><defs><clipPath id="network-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNetworkSlashFill);
const Memo = memo(ForwardRef);
export default Memo;