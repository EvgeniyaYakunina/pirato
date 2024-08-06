import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgQrCodeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#qr-code-fill_svg__a)"><path d="M6.5 2.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M6.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M12.5 2.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M9 11.5a.5.5 0 0 0 .5-.5V9a.5.5 0 1 0-1 0v2a.5.5 0 0 0 .5.5" /><path d="M13 9.5h-1.5V9a.5.5 0 0 0-1 0v3.5H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2.5H13a.5.5 0 0 0 0-1M13 11.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="qr-code-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgQrCodeFill);
const Memo = memo(ForwardRef);
export default Memo;