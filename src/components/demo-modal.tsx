import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Divider,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Textarea,
  ModalFooter,
  Button,
  Input,
  Select,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
interface Props {
  isOpen: any;
  onClose: any;
}
const DemoModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      isCentered
      size={"lg"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <div>
            <p className="text-lg">Book Demo</p>
            <p className="text-base font-light">
              Please provide your correct details
            </p>
          </div>
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody>
          <Stack spacing={"4"}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" />
            </FormControl>{" "}
            <FormControl>
              <FormLabel>Portfolio Size</FormLabel>
              <Select placeholder="Select size">
                <option>5-10</option>
                <option>10-50</option>
                <option>50-100</option>
                <option>100-200</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>
                What tool do you use to manage your shortlets?*
              </FormLabel>
              <p className="text-xs font-semibold text-[#6C757D]">
                Please check all that apply.
              </p>
              <CheckboxGroup
                colorScheme="orange"
                defaultValue={["naruto", "kakashi"]}
              >
                <Stack spacing={[1, 5]} direction={["column"]} mt="2">
                  <Checkbox value="Spreadsheet">Spreadsheet</Checkbox>
                  <Checkbox value="Whatsapp">Whatsapp</Checkbox>
                  <Checkbox value="Hostaway">Hostaway</Checkbox>{" "}
                  <Checkbox value="Airbnb">Airbnb</Checkbox>{" "}
                  <Checkbox value="Guesty">Guesty</Checkbox>{" "}
                  <Checkbox value="Booking.com">Booking.com</Checkbox>
                  <Checkbox value="others">Others</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <FormControl>
              <FormLabel>
                What is most important to you as you mange your shortlet
                business?*
              </FormLabel>
              <p className="text-xs font-semibold text-[#6C757D]">
                Please check all that apply.
              </p>
              <CheckboxGroup
                colorScheme="orange"
                defaultValue={["naruto", "kakashi"]}
              >
                <Stack spacing={[1, 5]} direction={["column"]} mt="2">
                  <Checkbox value="Spreadsheet">
                    Communicating quickly with customers
                  </Checkbox>
                  <Checkbox value="Whatsapp">
                    Manage Service Provider(Cleaners, other staff)
                  </Checkbox>
                  <Checkbox value="Hostaway">
                    Furnishing / Interior Design
                  </Checkbox>{" "}
                  <Checkbox value="Airbnb">
                    Advertising(Getting more customers or guest)
                  </Checkbox>{" "}
                </Stack>
              </CheckboxGroup>
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button
            size={"lg"}
            bgColor={"#E36B37"}
            px="6"
            w={"full"}
            color={"white"}
            _hover={{ bgColor: "#E36B37" }}
          >
            Book Demo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DemoModal;
