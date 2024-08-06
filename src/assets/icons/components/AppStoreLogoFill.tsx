import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAppStoreLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#app-store-logo-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m-2.771 9.758-.3.5a.5.5 0 0 1-.858-.515l.3-.5a.5.5 0 0 1 .858.515M8 9.5H3.5a.5.5 0 0 1 0-1h2.217l1.7-2.833-.846-1.41a.5.5 0 0 1 .858-.514L8 4.695l.571-.953a.5.5 0 0 1 .858.516L6.883 8.5H8a.5.5 0 0 1 0 1m4.5 0h-1.617l1.046 1.742a.5.5 0 0 1-.858.515l-2.4-4a.5.5 0 0 1 .858-.514l.754 1.257H12.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="app-store-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAppStoreLogoFill);
const Memo = memo(ForwardRef);
export default Memo;