import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonSimpleWalkFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#person-simple-walk-fill_svg__a)"><path fill="#000" d="M7.5 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0M13 8.5c-1.79 0-2.613-.831-3.484-1.71a13 13 0 0 0-.688-.662c-2.312-2.009-6.014 1.42-6.17 1.568a.5.5 0 0 0 .684.728A10.2 10.2 0 0 1 5.25 7.063c.861-.462 1.587-.64 2.169-.537L4.04 14.301a.5.5 0 0 0 .918.398L7.058 9.87 9 11.258V14.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.21-.407l-2.324-1.66L8.305 7q.245.23.5.49C9.69 8.387 10.793 9.5 13 9.5a.5.5 0 1 0 0-1" /></g><defs><clipPath id="person-simple-walk-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonSimpleWalkFill);
const Memo = memo(ForwardRef);
export default Memo;