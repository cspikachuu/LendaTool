CREATE TABLE  users (
	"user_id" serial NOT NULL,
	"firstname" char NOT NULL,
	"lastname" char NOT NULL,
	"career" char,
  "tool_id" int,
	PRIMARY KEY ("user_id")
);

CREATE TABLE  tools (
	"tool_id" serial NOT NULL,
	"listingName" char NOT NULL,
  "photo" char,
	"condition" char NOT NULL,
	"type" char NOT NULL,
	"price" int NOT NULL,
	"status" boolean NOT NULL,
	"dateCreated" TIMESTAMP NOT NULL,
  "user_id" int NOT NULL,
	PRIMARY KEY ("tool_id"), 
  CONSTRAINT "fk_user" FOREIGN KEY("user_id")
	  REFERENCES users ("user_id")
    ON DELETE CASCADE
  
);


CREATE TABLE  borrower (
	"borrower_id" serial NOT NULL,
	"user" char NOT NULL,
	"tool_id" int NOT NULL,
  "user_id" int NOT NULL,
  PRIMARY KEY ("borrower_id"),
	CONSTRAINT "fk_b_tool" FOREIGN KEY("tool_id")
	  REFERENCES tools ("tool_id")
    ON DELETE SET NULL,
  CONSTRAINT "fk_b_user" FOREIGN KEY("user_id")
	  REFERENCES users ("user_id")
    ON DELETE SET NULL
);

ALTER TABLE borrower
  DROP COLUMN "user";

ALTER TABLE tools
  ADD "borrower_id" int;

  ALTER TABLE tools
  ADD CONSTRAINT "fk_borrower" FOREIGN KEY ("borrower_id")
	  REFERENCES borrower ("borrower_id")
    ON DELETE SET NULL;

 ALTER TABLE users
		ADD CONSTRAINT "fk_tool" FOREIGN KEY("tool_id")
	  REFERENCES tools ("tool_id")
    ON DELETE CASCADE;

ALTER TABLE users
  ADD "password" varchar;

ALTER TABLE users
ADD "username" varchar;

