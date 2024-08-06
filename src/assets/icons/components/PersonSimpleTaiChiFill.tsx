import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonSimpleTaiChiFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#person-simple-tai-chi-fill_svg__a)"><path fill="#000" d="M6 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7.5 3h-11a.5.5 0 1 0 0 1h5v1.777l-4.834 4.351a.501.501 0 0 0 .668.747l4.763-4.286L11 10.83v2.67a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.303-.46L8.5 8.67V7h5a.5.5 0 0 0 0-1" /></g><defs><clipPath id="person-simple-tai-chi-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonSimpleTaiChiFill);
const Memo = memo(ForwardRef);
export default Memo;