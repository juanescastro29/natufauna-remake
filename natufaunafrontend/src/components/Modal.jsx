import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Modal = ({ type, data, open, handleOpen }) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size="md"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: -100 },
        }}
      >
        {type === "history" && (
          <>
            <DialogHeader className="justify-center text-green-600">
              Hello my name is {data.petName}
            </DialogHeader>
            <DialogBody className="flex flex-col md:flex-row justify-center items-center md:items-start m-2 gap-4">
              <img
                className="max-w-[110px] md:max-w-[220px] rounded-md shadow-md"
                src={data.petImage}
                alt="petModal"
              />
              <div className="flex flex-col gap-y-4 w-full overflow-auto max-h-[150px] md:max-h-full">
                <h1 className="text-xl md:text-2xl text-green-600/100 text-center font-medium">My history is</h1>
                <p className="flex-grow break-words text-pretty text-sm md:text-base">
                  {data.petHistory}
                </p>
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="gradient" color="green" onClick={handleOpen}>
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Modal;
