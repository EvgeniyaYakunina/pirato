import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBandaidsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#bandaids-fill_svg__a)"><path d="M8 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" /><path d="m11.536 8 1.732-1.733a2.5 2.5 0 1 0-3.536-3.535L8 4.464 6.267 2.732a2.5 2.5 0 1 0-3.535 3.535L4.464 8 2.732 9.732a2.5 2.5 0 1 0 3.535 3.536L8 11.536l1.732 1.732a2.5 2.5 0 1 0 3.536-3.536zM8 5.879 10.121 8 8 10.121 5.879 8zm2.438-2.438a1.501 1.501 0 1 1 2.124 2.121L10.83 7.295 8.707 5.172zm-4.876 9.122a1.503 1.503 0 0 1-2.125-2.126L5.17 8.706l2.121 2.121z" /></g><defs><clipPath id="bandaids-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBandaidsFill);
const Memo = memo(ForwardRef);
export default Memo;