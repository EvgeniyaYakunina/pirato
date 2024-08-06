import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFeatherFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#feather-fill_svg__a)"><path fill="#000" d="m13.24 8.425-3.737 3.78a.99.99 0 0 1-.7.292H4.708l-1.854 1.857a.5.5 0 1 1-.708-.708l1.412-1.411L7.794 8h5.269a.25.25 0 0 1 .177.425m.304-6.515a4 4 0 0 0-5.369.26l-.6.592a.25.25 0 0 0-.075.175v3.938l3.438-3.438a.5.5 0 0 1 .706.707L8.794 7h5.524a.25.25 0 0 0 .223-.135 4.005 4.005 0 0 0-.997-4.955m-9.617 8.542L6.5 7.879V4.422a.25.25 0 0 0-.426-.177L3.794 6.5a1 1 0 0 0-.294.707v3.068a.25.25 0 0 0 .427.177" /></g><defs><clipPath id="feather-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFeatherFill);
const Memo = memo(ForwardRef);
export default Memo;