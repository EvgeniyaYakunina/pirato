import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDropSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#drop-slash-fill_svg__a)"><path fill="#000" d="M13.37 13.164a.499.499 0 0 1-.393.84.5.5 0 0 1-.347-.168l-.806-.887A5.48 5.48 0 0 1 8 14.5c-3 0-5.468-2.432-5.5-5.43-.017-1.52.514-3.114 1.546-4.675L2.644 2.852a.514.514 0 0 1 .008-.712.5.5 0 0 1 .718.024zm-.63-2.18a.25.25 0 0 0 .346.024.25.25 0 0 0 .073-.102A5.5 5.5 0 0 0 13.5 9c0-1.963-.906-4.043-2.624-6.016A16 16 0 0 0 8.285.59a.5.5 0 0 0-.574 0 15.7 15.7 0 0 0-2.263 2.035.25.25 0 0 0 0 .338z" /></g><defs><clipPath id="drop-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDropSlashFill);
const Memo = memo(ForwardRef);
export default Memo;