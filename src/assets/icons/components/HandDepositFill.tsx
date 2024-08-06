import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandDepositFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hand-deposit-fill_svg__a)"><path fill="#000" d="M14.5 12.416V15a.5.5 0 0 1-1 0v-2.585A4.68 4.68 0 0 0 12 9v3.647a.5.5 0 0 1-.918.274l-.668-1.02-.014-.024a.75.75 0 0 0-1.306.74l1.383 2.112a.5.5 0 0 1-.836.547l-1.392-2.125-.015-.024a2 2 0 0 1-.065-.125H3.5a.5.5 0 0 1-.5-.5V6a1 1 0 0 1 1-1h3v3a.5.5 0 0 0 1 0V5h3a1 1 0 0 1 1 1v1.726a5.68 5.68 0 0 1 2.5 4.69M8 2.205l1.146 1.148a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7 2.207V5h1z" /></g><defs><clipPath id="hand-deposit-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandDepositFill);
const Memo = memo(ForwardRef);
export default Memo;