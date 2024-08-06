import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBugDroidFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bug-droid-fill_svg__a)"><path fill="#000" d="m11.99 3.217.864-.863a.5.5 0 0 0-.708-.708l-.91.91a5.49 5.49 0 0 0-6.473 0l-.91-.91a.5.5 0 1 0-.707.708l.865.863A5.48 5.48 0 0 0 2.5 7v2.5a5.5 5.5 0 0 0 11 0V7c0-1.408-.54-2.763-1.51-3.783M8 2.5A4.505 4.505 0 0 1 12.5 7v.5h-9V7A4.505 4.505 0 0 1 8 2.5m1 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m-3.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0" /></g><defs><clipPath id="bug-droid-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBugDroidFill);
const Memo = memo(ForwardRef);
export default Memo;