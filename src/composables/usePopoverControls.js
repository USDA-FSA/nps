

export function usePopoverControls() {

  const showPopover = (id) => {
    console.log('popover id',id)
    document.getElementById(id).setAttribute('aria-hidden', 'false');
    document.getElementById(id).classList.add('fsa-popover--visible');
  }

  const hidePopover = (id) => {
    //let popover = document.getElementById(id)
    document.getElementById(id).setAttribute('aria-hidden', 'true');
    document.getElementById(id).classList.remove('fsa-popover--visible');
  }
  return {
    showPopover,
    hidePopover
  }
}