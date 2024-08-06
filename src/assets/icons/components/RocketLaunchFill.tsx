import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRocketLaunchFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#rocket-launch-fill_svg__a)"><path fill="#000" d="M6.366 11.946C6.084 12.563 5.143 14 2.5 14a.5.5 0 0 1-.5-.5c0-2.643 1.437-3.584 2.054-3.866a.5.5 0 0 1 .415.91c-.402.183-1.289.773-1.445 2.432 1.66-.156 2.25-1.043 2.432-1.445a.5.5 0 0 1 .91.415m7.625-9a1 1 0 0 0-.938-.937c-.786-.047-2.796.025-4.462 1.692L5.5 6.794a.5.5 0 0 1-.708-.707l1.66-1.66A.25.25 0 0 0 6.276 4h-1.63a1 1 0 0 0-.709.292L1.794 6.437a1 1 0 0 0 .567 1.698l2.404.336 2.763 2.763.336 2.405a.996.996 0 0 0 .992.86 1 1 0 0 0 .706-.293l2.146-2.143a1 1 0 0 0 .292-.71V9.724a.25.25 0 0 0-.427-.176l-1.66 1.66a.5.5 0 0 1-.732-.026.513.513 0 0 1 .037-.694l3.08-3.08c1.668-1.667 1.74-3.676 1.693-4.463z" /></g><defs><clipPath id="rocket-launch-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRocketLaunchFill);
const Memo = memo(ForwardRef);
export default Memo;