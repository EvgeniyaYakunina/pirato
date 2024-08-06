import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBankFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bank-fill_svg__a)"><path fill="#000" d="M15.5 13a.5.5 0 0 1-.5.5H1a.5.5 0 0 1 0-1h14a.5.5 0 0 1 .5.5M1.019 6.136a.5.5 0 0 1 .22-.562l6.5-4a.5.5 0 0 1 .523 0l6.5 4a.5.5 0 0 1-.262.926H13v4h1a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h1v-4H1.5a.5.5 0 0 1-.481-.364M9 10a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0zm-3 0a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0z" /></g><defs><clipPath id="bank-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBankFill);
const Memo = memo(ForwardRef);
export default Memo;