import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTShirtFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#t-shirt-fill_svg__a)"><path fill="#000" d="M15.475 3.826 12.24 2.063A.5.5 0 0 0 12 2h-2a.5.5 0 0 0-.5.5 1.5 1.5 0 1 1-3 0A.5.5 0 0 0 6 2H4a.5.5 0 0 0-.24.063L.526 3.826a.985.985 0 0 0-.412 1.329l1.204 2.3A1.02 1.02 0 0 0 2.23 8H3.5v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8h1.271a1.02 1.02 0 0 0 .912-.544l1.204-2.301a.985.985 0 0 0-.412-1.329M2.23 7a.04.04 0 0 1-.026-.008L1.006 4.704 3.5 3.343V7zm11.566-.009a.04.04 0 0 1-.025.009H12.5V3.343l2.494 1.36z" /></g><defs><clipPath id="t-shirt-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTShirtFill);
const Memo = memo(ForwardRef);
export default Memo;