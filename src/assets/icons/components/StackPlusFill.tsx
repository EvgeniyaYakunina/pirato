import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStackPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stack-plus-fill_svg__a)"><path fill="#000" d="M1.5 5a.5.5 0 0 1 .25-.432l6-3.5a.5.5 0 0 1 .504 0l6 3.5a.5.5 0 0 1 0 .864l-6 3.5a.5.5 0 0 1-.504 0l-6-3.5A.5.5 0 0 1 1.5 5m12.25 2.568L8 10.921 2.25 7.568a.5.5 0 0 0-.5.864l6 3.5a.5.5 0 0 0 .504 0l6-3.5a.498.498 0 0 0 .055-.834.5.5 0 0 0-.559-.03M14.5 12h-1v-1a.5.5 0 0 0-1 0v1h-1a.5.5 0 1 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1m-5.75 1.485-.75.438-5.75-3.355a.5.5 0 0 0-.5.864l6 3.5a.5.5 0 0 0 .504 0l1-.583a.5.5 0 1 0-.504-.864" /></g><defs><clipPath id="stack-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStackPlusFill);
const Memo = memo(ForwardRef);
export default Memo;