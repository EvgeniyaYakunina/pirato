import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tree-fill_svg__a)"><path fill="#000" d="M8 11.74q.24.16.5.29v2.47a.5.5 0 1 1-1 0v-2.47q.26-.13.5-.29m4.381-7.828a4.75 4.75 0 0 0-8.762 0A4.48 4.48 0 0 0 1 7.987c-.006 2.388 2 4.45 4.384 4.513a4.5 4.5 0 0 0 2.116-.47V9.808L4.776 8.447a.5.5 0 0 1 .448-.895L7.5 8.692V5.5a.5.5 0 0 1 1 0v1.691l2.276-1.139a.5.5 0 1 1 .448.895L8.5 8.31v3.72a4.5 4.5 0 0 0 2 .471h.114C13 12.438 15.007 10.375 15 7.987a4.48 4.48 0 0 0-2.619-4.075" /></g><defs><clipPath id="tree-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTreeFill);
const Memo = memo(ForwardRef);
export default Memo;