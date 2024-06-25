/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "./utils";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function AddPet(props) {
  const { pet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightFiveNineFourSixSevenFourValue,
    setTextFieldThreeEightFiveNineFourSixSevenFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightFiveNineFourSixEightEightValue,
    setTextFieldThreeEightFiveNineFourSixEightEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightFiveNineFourSixEightOneValue,
    setTextFieldThreeEightFiveNineFourSixEightOneValue,
  ] = useStateMutationAction("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreCreateAction({
    fields: {
      Name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
      about: textFieldThreeEightFiveNineFourSixSevenFourValue,
      image: textFieldThreeEightFiveNineFourSixEightEightValue,
      color: textFieldThreeEightFiveNineFourSixEightOneValue,
    },
    model: Pet,
    schema: schema,
  });
  const buttonThreeEightFiveNineFourSixNineSixOnClick =
    useDataStoreUpdateAction({
      fields: {
        Name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
        age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
        breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
        about: textFieldThreeEightFiveNineFourSixSevenFourValue,
        image: textFieldThreeEightFiveNineFourSixEightEightValue,
        color: textFieldThreeEightFiveNineFourSixEightOneValue,
      },
      id: pet?.id,
      model: Pet,
      schema: schema,
    });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="25px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(199,235,255,1)"
      {...getOverrideProps(overrides, "AddPet")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="225px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Pet"
            {...getOverrideProps(overrides, "Add Pet")}
          ></Text>
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            placeholder="Kitty"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Age"
            placeholder="12"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Breed"
            placeholder="Labrador"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="About"
            placeholder="Cute, funny"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveNineFourSixSevenFourValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveNineFourSixSevenFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38594674")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Color"
            placeholder="Blue"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveNineFourSixEightOneValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveNineFourSixEightOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38594681")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="Image URL"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveNineFourSixEightEightValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveNineFourSixEightEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38594688")}
          ></TextField>
        </Flex>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeEightFiveNineFourSixNineSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button38594696")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
