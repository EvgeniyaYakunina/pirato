import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVaultFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#vault-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1h1v1a.5.5 0 0 0 1 0v-1h7v1a.5.5 0 0 0 1 0v-1h1a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1m-.5 6h-1.807a2.25 2.25 0 1 1 0-1H13a.5.5 0 0 1 0 1M10.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" /></g><defs><clipPath id="vault-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVaultFill);
const Memo = memo(ForwardRef);
export default Memo;