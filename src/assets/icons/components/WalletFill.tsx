import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWalletFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wallet-fill_svg__a)"><path fill="#000" d="M13.5 4h-10a.5.5 0 1 1 0-1H12a.5.5 0 0 0 0-1H3.5A1.5 1.5 0 0 0 2 3.5v8A1.5 1.5 0 0 0 3.5 13h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-2.25 5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="wallet-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWalletFill);
const Memo = memo(ForwardRef);
export default Memo;