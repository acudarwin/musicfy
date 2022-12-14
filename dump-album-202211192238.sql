-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: album
-- ------------------------------------------------------
-- Server version	5.7.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `name_artist` varchar(100) NOT NULL,
  `year_album` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_5c17fece855899bace782d3a29` (`name`),
  UNIQUE KEY `IDX_5d31542bbb4a267073408856fb` (`name_artist`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES ('00b081b5-2f72-4541-931e-e77ab5b6f9ff','A SIDE PROFILE OF HERSELF','Adele','2020','/albums/00b081b5-2f72-4541-931e-e77ab5b6f9ff.jpg','2022-11-20 01:26:50.035657','2022-11-20 02:30:15.000000',NULL),('0dc63c63-fe51-4949-b17b-26e97b899aa5','GET A GRIP','Aerosmith','1999','/albums/0dc63c63-fe51-4949-b17b-26e97b899aa5.jpg','2022-11-20 01:28:09.109889','2022-11-20 02:30:38.000000',NULL),('1a00f633-3440-4f17-8c8a-311a600549f3','PAGE AVENUE','Story of the year','2001','/albums/1a00f633-3440-4f17-8c8a-311a600549f3.jpg','2022-11-18 19:45:03.487865','2022-11-20 02:30:48.000000',NULL),('1c9c1e1f-c945-4fa1-8f36-5d16e70d72cc','FANTASIA O REALIDAD','Alex Ubago','2000','/albums/1c9c1e1f-c945-4fa1-8f36-5d16e70d72cc.jpg','2022-11-18 00:21:21.998067','2022-11-20 02:31:04.000000',NULL),('1d7ed578-e6e4-46f8-988a-a9dcebfd53b5','KEYS','Alicia Keys','1998','/albums/1d7ed578-e6e4-46f8-988a-a9dcebfd53b5.jpg','2022-11-20 01:27:23.817988','2022-11-20 02:31:15.000000',NULL),('23db32a4-68b0-4622-8fec-6958df1458f9','THE BLACK PARADE','My chemical romance','2002','/albums/23db32a4-68b0-4622-8fec-6958df1458f9.jpg','2022-11-20 01:27:33.233689','2022-11-20 02:31:26.000000',NULL),('32cfc33b-f7a2-4958-8273-651b12b2f354','A MORIR','Americo','1998','/albums/32cfc33b-f7a2-4958-8273-651b12b2f354.jpg','2022-11-20 01:26:13.731526','2022-11-20 02:31:35.000000',NULL),('35079739-ebd6-480d-ae60-94ace29826c7','UTOPIA','Belinda','1997','/albums/35079739-ebd6-480d-ae60-94ace29826c7.jpg','2022-11-20 01:27:09.306461','2022-11-20 02:31:41.000000',NULL),('373c306a-a443-4e16-8140-d830c3526102','ESCUCHA','Laura Pausini','19996','/albums/373c306a-a443-4e16-8140-d830c3526102.jpg','2022-11-20 01:26:30.847447','2022-11-20 02:31:55.000000',NULL),('5097d5e6-3747-4f27-be0c-7df99bd6ea4f','ALLISON','Allison','2012','/albums/5097d5e6-3747-4f27-be0c-7df99bd6ea4f.jpg','2022-11-20 01:27:46.491174','2022-11-20 02:32:07.000000',NULL),('64b347d8-2680-43ff-b191-4360d99cb93c','BLANCO Y NEGRO','Airbag','2005','/albums/64b347d8-2680-43ff-b191-4360d99cb93c.jpg','2022-11-20 01:28:21.023274','2022-11-20 02:32:15.000000',NULL),('6c56b30e-24ce-4a35-9d78-973e5e35ff5f','LO QUE DURA DURA','Nowayout','2008 - 2009','/albums/6c56b30e-24ce-4a35-9d78-973e5e35ff5f.jpg','2022-11-20 01:26:34.674822','2022-11-20 02:32:24.000000',NULL),('7186ae9a-1b87-48f4-b2e1-8199cebfafaa','RIOT','Paramore','2004','/albums/7186ae9a-1b87-48f4-b2e1-8199cebfafaa.jpg','2022-11-20 01:27:16.559131','2022-11-20 02:32:31.000000',NULL),('89393958-2e89-49ad-8432-3b89da0586a9','AMANTES SUNT AMENTES','Pxndx','2011','/albums/89393958-2e89-49ad-8432-3b89da0586a9.jpg','2022-11-20 01:27:59.871118','2022-11-20 02:33:06.000000',NULL),('8f3a2712-e2eb-410f-a2ba-891e027fdbfd','DISCOVERING THE WATERFRONT','Silverstein','(2015 - 2016)','/albums/8f3a2712-e2eb-410f-a2ba-891e027fdbfd.jpg','2022-11-17 02:02:13.288021','2022-11-20 02:33:19.000000',NULL),('973f8196-28bc-47f0-933c-141a2117763c','METEORA','Linkin Park','2007','/albums/973f8196-28bc-47f0-933c-141a2117763c.jpg','2022-11-20 01:27:42.041020','2022-11-20 02:33:37.000000',NULL),('a196a91e-c1ff-47f3-bd9b-bbe1462dca9c','RISE','Rasmus','2006','/albums/a196a91e-c1ff-47f3-bd9b-bbe1462dca9c.jpg','2022-11-19 01:07:36.455166','2022-11-20 02:33:56.000000',NULL),('af4d275f-3465-4c40-9e51-7bb1352c69ae','REBELDE','Rbd','2008','/albums/af4d275f-3465-4c40-9e51-7bb1352c69ae.jpg','2022-11-20 01:28:27.861148','2022-11-20 02:25:32.000000',NULL),('c1626d12-650d-4cd3-9cf9-7a0a76440bb5','SOBREVIVE','Kudai','2010','/albums/c1626d12-650d-4cd3-9cf9-7a0a76440bb5.jpg','2022-11-20 01:26:57.812874','2022-11-20 02:25:18.000000',NULL),('e7cad0fd-3677-44ee-a61d-1535eb0a0290','ATREVIDO','Trueno','2019','/albums/e7cad0fd-3677-44ee-a61d-1535eb0a0290.jpg','2022-11-19 01:08:24.152106','2022-11-20 02:25:07.000000',NULL);
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` varchar(36) NOT NULL,
  `name_song` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  `album_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_2c542d37708b7d1074172f10aa` (`name_song`),
  KEY `FK_944f44ec5e875219d05bb81d966` (`album_id`),
  CONSTRAINT `FK_944f44ec5e875219d05bb81d966` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES ('143f0a0f-f6fb-4457-8721-bf27785332e3','esperanza','2022-11-20 02:34:57.746079','2022-11-20 02:34:57.746079',NULL,'1c9c1e1f-c945-4fa1-8f36-5d16e70d72cc'),('2b2f938b-bb1c-4911-9ed3-316ac0e2226d','Y si te vas','2022-11-20 02:36:23.736252','2022-11-20 02:36:23.736252',NULL,'64b347d8-2680-43ff-b191-4360d99cb93c'),('2f8b2084-5086-4d1e-bada-2a229e808faf','Soy rebelde','2022-11-20 02:37:38.868046','2022-11-20 02:37:38.868046',NULL,'af4d275f-3465-4c40-9e51-7bb1352c69ae'),('4590b840-1ad2-47ed-8434-919cd78c96a8','Rise','2022-11-20 02:37:24.743919','2022-11-20 02:37:24.743919',NULL,'a196a91e-c1ff-47f3-bd9b-bbe1462dca9c'),('4826f7db-23af-466b-9fc8-5b41aa3da1ac','Realidad','2022-11-20 02:35:45.159644','2022-11-20 02:35:45.159644',NULL,'35079739-ebd6-480d-ae60-94ace29826c7'),('6f63fc36-c3af-4c55-8238-1f37438145d6','Cuando no es como deberia ser','2022-11-20 02:36:51.569253','2022-11-20 02:36:51.569253',NULL,'89393958-2e89-49ad-8432-3b89da0586a9'),('79d17a65-9305-40eb-9d9a-8399ddcacbbd','Ignore','2022-11-20 02:36:41.119974','2022-11-20 02:36:41.119974',NULL,'7186ae9a-1b87-48f4-b2e1-8199cebfafaa'),('86b2dd4a-6329-4f2e-b033-fd588ed99176','the ghost of you','2022-11-20 02:35:28.508493','2022-11-20 02:35:28.508493',NULL,'23db32a4-68b0-4622-8fec-6958df1458f9'),('8a88b529-7f8f-4d4b-ad63-e39466ea0eeb','A llorar otra parte','2022-11-20 02:35:36.626486','2022-11-20 02:35:36.626486',NULL,'32cfc33b-f7a2-4958-8273-651b12b2f354'),('8e5d123f-40ae-4894-b2d1-63c819ea1e67','risted','2022-11-20 02:35:03.396228','2022-11-20 02:35:03.396228',NULL,'1d7ed578-e6e4-46f8-988a-a9dcebfd53b5'),('9d6f763d-8e0d-47e5-bd81-45d8c1afe791','The broken is early','2022-11-20 02:34:34.269860','2022-11-20 02:34:34.269860',NULL,'1a00f633-3440-4f17-8c8a-311a600549f3'),('a28a749b-e539-4bc7-aa30-1b7faa357be8','Escucha','2022-11-20 02:35:58.196251','2022-11-20 02:35:58.196251',NULL,'373c306a-a443-4e16-8140-d830c3526102'),('a3c024e2-d383-402c-958a-f6edb01cea20','Razorblades','2022-11-20 02:37:08.597856','2022-11-20 02:37:08.597856',NULL,'8f3a2712-e2eb-410f-a2ba-891e027fdbfd'),('adb5eba8-6cf8-41aa-94d8-ffdb036a552f','In the end','2022-11-20 02:37:17.119047','2022-11-20 02:37:17.119047',NULL,'973f8196-28bc-47f0-933c-141a2117763c'),('af61b3e4-94bf-4219-92db-dac6f346c5de','follower','2022-11-20 02:34:49.419256','2022-11-20 02:34:49.419256',NULL,'0dc63c63-fe51-4949-b17b-26e97b899aa5'),('ba7edf91-ccd1-4f10-a466-184f10fc2eb3','Volar','2022-11-20 02:37:45.617714','2022-11-20 02:37:45.617714',NULL,'c1626d12-650d-4cd3-9cf9-7a0a76440bb5'),('c9da2402-3980-48b9-bcbe-5edf6d3f5b09','Nada Mas','2022-11-20 02:36:32.681053','2022-11-20 02:36:32.681053',NULL,'6c56b30e-24ce-4a35-9d78-973e5e35ff5f'),('d1378388-651b-4f76-98a1-c794342c31a5','Mamichula','2022-11-20 02:37:52.097246','2022-11-20 02:37:52.097246',NULL,'e7cad0fd-3677-44ee-a61d-1535eb0a0290'),('e2b58f2f-1afb-4257-8f61-bbdc9376e8a2','Me cambio','2022-11-20 02:36:08.161131','2022-11-20 02:36:08.161131',NULL,'5097d5e6-3747-4f27-be0c-7df99bd6ea4f'),('f5e521ab-cd32-4c76-b195-428fb08262e6','chamba','2022-11-20 02:34:41.404775','2022-11-20 02:34:41.404775',NULL,'00b081b5-2f72-4541-931e-e77ab5b6f9ff');
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'album'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-19 22:38:18
